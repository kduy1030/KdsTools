import test from "node:test";
import assert from "node:assert/strict";
import {
    bfsSteps,
    binarySearchSteps,
    bubbleSortSteps,
    dfsSteps,
    dijkstraSteps,
    insertionSortSteps,
    linearSearchSteps,
    mergeSortSteps,
    selectionSortSteps,
} from "../algorithm-visualizer.mjs";

function finalFrame(steps) {
    let frame;
    for (const next of steps) frame = next;
    return frame;
}

test("Bubble Sort sorts mixed positive and negative values", () => {
    const result = finalFrame(bubbleSortSteps([5, -1, 3, 3, 0]));
    assert.deepEqual(result.state.array, [-1, 0, 3, 3, 5]);
    assert.equal(result.active.complete, true);
});

test("Bubble Sort handles empty and single-element arrays", () => {
    assert.deepEqual(finalFrame(bubbleSortSteps([])).state.array, []);
    assert.deepEqual(finalFrame(bubbleSortSteps([7])).state.array, [7]);
});

test("Bubble Sort records comparisons and swaps as separate steps", () => {
    const steps = [...bubbleSortSteps([2, 1])];
    assert.equal(steps.some((step) => step.active.comparing?.length === 2), true);
    assert.equal(steps.some((step) => step.active.swapping?.length === 2), true);
    assert.deepEqual(finalFrame(steps).state.sorted, [0, 1]);
});

test("BFS visits reachable vertices in queue order and reports distances", () => {
    const result = finalFrame(bfsSteps({
        vertices: ["A", "B", "C", "D"],
        edges: [
            { from: "A", to: "B", undirected: true },
            { from: "A", to: "C", undirected: true },
            { from: "B", to: "D", undirected: true },
            { from: "C", to: "D", undirected: true },
        ],
    }, "A"));
    assert.deepEqual(result.state.traversal, ["A", "B", "C", "D"]);
    assert.deepEqual(result.state.distances, { A: 0, B: 1, C: 1, D: 2 });
    assert.equal(result.active.complete, true);
});

test("BFS supports directed and disconnected graphs", () => {
    const result = finalFrame(bfsSteps({
        vertices: ["A", "B", "C"],
        edges: [{ from: "A", to: "B", undirected: false }],
    }, "A"));
    assert.deepEqual(result.state.traversal, ["A", "B"]);
    assert.equal(result.state.distances.C, null);
});

test("BFS rejects a start vertex missing from the graph", () => {
    assert.throws(() => [...bfsSteps({
        vertices: ["A"],
        edges: [],
    }, "B")], /Đỉnh bắt đầu/);
});

test("Selection Sort sorts values and marks every final index", () => {
    const result = finalFrame(selectionSortSteps([4, 1, 3, 1]));
    assert.deepEqual(result.state.array, [1, 1, 3, 4]);
    assert.deepEqual(result.state.sorted, [0, 1, 2, 3]);
});

test("Insertion Sort handles negative, duplicate, and empty input", () => {
    assert.deepEqual(
        finalFrame(insertionSortSteps([0, -4, 5, 5, 2])).state.array,
        [-4, 0, 2, 5, 5]
    );
    assert.deepEqual(finalFrame(insertionSortSteps([])).state.array, []);
});

test("Merge Sort sorts and records auxiliary merge state", () => {
    const frames = [...mergeSortSteps([9, 2, 7, 1, 5])];
    assert.deepEqual(finalFrame(frames).state.array, [1, 2, 5, 7, 9]);
    assert.equal(frames.some((frame) => frame.state.auxiliary), true);
});

test("Linear Search returns the first matching index and handles absence", () => {
    assert.equal(finalFrame(linearSearchSteps([3, 4, 4, 8], 4)).active.found, 1);
    assert.equal(finalFrame(linearSearchSteps([3, 4, 8], 6)).active.notFound, true);
});

test("Binary Search finds values and rejects unsorted input", () => {
    assert.equal(finalFrame(binarySearchSteps([1, 3, 5, 7, 9], 7)).active.found, 3);
    assert.equal(finalFrame(binarySearchSteps([1, 3, 5, 7, 9], 8)).active.notFound, true);
    assert.throws(() => [...binarySearchSteps([2, 1], 1)], /sắp xếp tăng dần/);
});

test("DFS traverses reachable graph vertices in depth-first order", () => {
    const result = finalFrame(dfsSteps({
        vertices: ["A", "B", "C", "D"],
        edges: [
            { from: "A", to: "B", undirected: true },
            { from: "A", to: "C", undirected: true },
            { from: "B", to: "D", undirected: true },
            { from: "C", to: "D", undirected: true },
        ],
    }, "A"));
    assert.deepEqual(result.state.traversal, ["A", "B", "D", "C"]);
    assert.equal(result.active.complete, true);
});

test("Dijkstra computes shortest paths for directed and undirected edges", () => {
    const result = finalFrame(dijkstraSteps({
        vertices: ["A", "B", "C", "D", "X"],
        edges: [
            { from: "A", to: "B", weight: 4, undirected: true },
            { from: "A", to: "C", weight: 1, undirected: true },
            { from: "C", to: "B", weight: 2, undirected: true },
            { from: "B", to: "D", weight: 1, undirected: false },
        ],
    }, "A"));
    assert.deepEqual(result.state.distances, {
        A: 0,
        B: 3,
        C: 1,
        D: 4,
        X: Infinity,
    });
    assert.equal(result.active.complete, true);
});

test("Dijkstra rejects negative edge weights", () => {
    assert.throws(() => [...dijkstraSteps({
        vertices: ["A", "B"],
        edges: [{ from: "A", to: "B", weight: -1 }],
    }, "A")], /không âm/);
});

test("Dijkstra accepts zero-weight edges", () => {
    const result = finalFrame(dijkstraSteps({
        vertices: ["A", "B", "C"],
        edges: [
            { from: "A", to: "B", weight: 0, undirected: false },
            { from: "B", to: "C", weight: 2, undirected: false },
        ],
    }, "A"));
    assert.deepEqual(result.state.distances, { A: 0, B: 0, C: 2 });
});
