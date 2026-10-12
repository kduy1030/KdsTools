function createFrame(state, status, active = {}) {
    return {
        state: {
            ...state,
            array: state.array ? [...state.array] : undefined,
            visited: state.visited ? [...state.visited] : undefined,
            queue: state.queue ? [...state.queue] : undefined,
            traversal: state.traversal ? [...state.traversal] : undefined,
            sorted: state.sorted ? [...state.sorted] : undefined,
            distances: state.distances ? { ...state.distances } : undefined,
            auxiliary: state.auxiliary ? [...state.auxiliary] : undefined,
            stack: state.stack ? [...state.stack] : undefined,
            settled: state.settled ? [...state.settled] : undefined,
            parents: state.parents ? { ...state.parents } : undefined,
            vertices: state.vertices ? [...state.vertices] : undefined,
            edges: state.edges ? state.edges.map((edge) => ({ ...edge })) : undefined,
        },
        status,
        active: { ...active },
    };
}

function validateNumbers(values, name) {
    if (!Array.isArray(values) || values.some((value) => !Number.isFinite(value))) {
        throw new TypeError(`${name} cần một mảng số hữu hạn.`);
    }
}

export function* bubbleSortSteps(values) {
    validateNumbers(values, "Bubble Sort");
    const array = [...values];
    const sorted = new Set();
    yield createFrame({ array, sorted: [] }, "Bắt đầu Bubble Sort.");

    for (let end = array.length - 1; end > 0; end--) {
        let swapped = false;
        for (let index = 0; index < end; index++) {
            yield createFrame(
                { array, sorted: [...sorted] },
                `So sánh ${array[index]} và ${array[index + 1]}.`,
                { comparing: [index, index + 1] }
            );
            if (array[index] > array[index + 1]) {
                [array[index], array[index + 1]] = [array[index + 1], array[index]];
                swapped = true;
                yield createFrame(
                    { array, sorted: [...sorted] },
                    `Đổi chỗ ${array[index + 1]} và ${array[index]}.`,
                    { swapping: [index, index + 1] }
                );
            }
        }
        sorted.add(end);
        if (!swapped) {
            for (let index = 0; index < end; index++) sorted.add(index);
            break;
        }
    }
    if (array.length) sorted.add(0);
    yield createFrame(
        { array, sorted: [...sorted].sort((a, b) => a - b) },
        "Hoàn tất: mảng đã được sắp xếp tăng dần.",
        { complete: true }
    );
}

export function* selectionSortSteps(values) {
    validateNumbers(values, "Selection Sort");
    const array = [...values];
    const sorted = [];
    yield createFrame({ array, sorted }, "Bắt đầu Selection Sort.");
    for (let start = 0; start < array.length; start++) {
        let minimum = start;
        for (let index = start + 1; index < array.length; index++) {
            yield createFrame(
                { array, sorted: [...sorted] },
                `So sánh ${array[index]} với giá trị nhỏ nhất hiện tại ${array[minimum]}.`,
                { comparing: [minimum, index], minimum }
            );
            if (array[index] < array[minimum]) minimum = index;
        }
        if (minimum !== start) {
            [array[start], array[minimum]] = [array[minimum], array[start]];
            yield createFrame(
                { array, sorted: [...sorted] },
                `Đưa giá trị nhỏ nhất ${array[start]} về vị trí ${start}.`,
                { swapping: [start, minimum] }
            );
        }
        sorted.push(start);
    }
    yield createFrame({ array, sorted }, "Hoàn tất Selection Sort.", { complete: true });
}

export function* insertionSortSteps(values) {
    validateNumbers(values, "Insertion Sort");
    const array = [...values];
    yield createFrame(
        { array, sorted: array.length ? [0] : [] },
        "Bắt đầu Insertion Sort."
    );
    for (let index = 1; index < array.length; index++) {
        const value = array[index];
        let position = index;
        yield createFrame(
            { array, sorted: Array.from({ length: index }, (_, item) => item) },
            `Lấy ${value} làm giá trị cần chèn vào đoạn đã sắp xếp.`,
            { activeIndex: index, key: index }
        );
        while (position > 0 && array[position - 1] > value) {
            yield createFrame(
                { array, sorted: Array.from({ length: index }, (_, item) => item) },
                `So sánh ${array[position - 1]} với ${value}; dịch ${array[position - 1]} sang phải.`,
                { comparing: [position - 1, position], key: index }
            );
            array[position] = array[position - 1];
            position--;
            yield createFrame(
                { array, sorted: Array.from({ length: index }, (_, item) => item) },
                `Dịch phần tử sang phải; vị trí trống hiện ở chỉ số ${position}.`,
                { swapping: [position, position + 1], key: position + 1 }
            );
        }
        array[position] = value;
        yield createFrame(
            { array, sorted: Array.from({ length: index + 1 }, (_, item) => item) },
            `Chèn ${value} vào vị trí ${position}.`,
            { activeIndex: position }
        );
    }
    yield createFrame(
        { array, sorted: array.map((_, index) => index) },
        "Hoàn tất Insertion Sort.",
        { complete: true }
    );
}

export function* mergeSortSteps(values) {
    validateNumbers(values, "Merge Sort");
    const array = [...values];
    const auxiliary = [...array];
    yield createFrame({ array, auxiliary }, "Bắt đầu Merge Sort; chia mảng thành các nửa.");

    function* merge(start, middle, end) {
        let left = start;
        let right = middle;
        let output = start;
        while (left < middle && right < end) {
            yield createFrame(
                { array, auxiliary },
                `So sánh ${array[left]} và ${array[right]} để trộn hai nửa.`,
                { comparing: [left, right], range: [start, end] }
            );
            if (array[left] <= array[right]) auxiliary[output++] = array[left++];
            else auxiliary[output++] = array[right++];
        }
        while (left < middle) auxiliary[output++] = array[left++];
        while (right < end) auxiliary[output++] = array[right++];
        for (let index = start; index < end; index++) array[index] = auxiliary[index];
        yield createFrame(
            { array, auxiliary },
            `Trộn xong đoạn chỉ số ${start} đến ${end - 1}.`,
            { range: [start, end], merged: true }
        );
    }

    function* divide(start, end) {
        if (end - start < 2) return;
        const middle = Math.floor((start + end) / 2);
        yield createFrame(
            { array, auxiliary },
            `Chia đoạn [${start}, ${end}) tại vị trí ${middle}.`,
            { range: [start, end], middle }
        );
        yield* divide(start, middle);
        yield* divide(middle, end);
        yield* merge(start, middle, end);
    }

    yield* divide(0, array.length);
    yield createFrame(
        { array, auxiliary, sorted: array.map((_, index) => index) },
        "Hoàn tất Merge Sort.",
        { complete: true }
    );
}

export function* linearSearchSteps(values, target) {
    validateNumbers(values, "Linear Search");
    if (!Number.isFinite(target)) throw new TypeError("Giá trị cần tìm phải là số hữu hạn.");
    const array = [...values];
    const visited = [];
    yield createFrame({ array, visited }, `Bắt đầu Linear Search để tìm ${target}.`);
    for (let index = 0; index < array.length; index++) {
        yield createFrame(
            { array, visited: [...visited] },
            `So sánh phần tử chỉ số ${index}: ${array[index]} với ${target}.`,
            { comparing: [index] }
        );
        if (array[index] === target) {
            yield createFrame(
                { array, visited: [...visited, index] },
                `Đã tìm thấy ${target} tại chỉ số ${index}.`,
                { found: index, complete: true }
            );
            return;
        }
        visited.push(index);
    }
    yield createFrame(
        { array, visited },
        `Không tìm thấy ${target} trong mảng.`,
        { notFound: true, complete: true }
    );
}

export function* binarySearchSteps(values, target) {
    validateNumbers(values, "Binary Search");
    if (!Number.isFinite(target)) throw new TypeError("Giá trị cần tìm phải là số hữu hạn.");
    const array = [...values];
    for (let index = 1; index < array.length; index++) {
        if (array[index] < array[index - 1]) {
            throw new RangeError("Binary Search yêu cầu mảng được sắp xếp tăng dần.");
        }
    }
    let low = 0;
    let high = array.length - 1;
    const visited = [];
    yield createFrame({ array, visited }, `Bắt đầu Binary Search để tìm ${target} trong mảng đã sắp xếp.`);
    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        yield createFrame(
            { array, visited },
            `Khoảng tìm kiếm [${low}, ${high}], xét giữa tại chỉ số ${middle}: ${array[middle]}.`,
            { comparing: [middle], low, high, middle }
        );
        if (array[middle] === target) {
            yield createFrame(
                { array, visited: [...visited, middle] },
                `Đã tìm thấy ${target} tại chỉ số ${middle}.`,
                { found: middle, low, high, complete: true }
            );
            return;
        }
        visited.push(middle);
        if (array[middle] < target) {
            low = middle + 1;
            yield createFrame(
                { array, visited },
                `${array[middle]} < ${target}; bỏ nửa trái, chuyển low = ${low}.`,
                { discarded: "left", low, high }
            );
        } else {
            high = middle - 1;
            yield createFrame(
                { array, visited },
                `${array[middle]} > ${target}; bỏ nửa phải, chuyển high = ${high}.`,
                { discarded: "right", low, high }
            );
        }
    }
    yield createFrame(
        { array, visited },
        `Không tìm thấy ${target} trong mảng.`,
        { notFound: true, complete: true }
    );
}

function createGraphAdjacency(graph, start, algorithmName, { weighted = false } = {}) {
    if (!graph || !Array.isArray(graph.vertices) || !Array.isArray(graph.edges)) {
        throw new TypeError(`${algorithmName} cần đồ thị gồm vertices và edges.`);
    }
    const vertices = [...new Set(graph.vertices)];
    if (!vertices.length || !vertices.includes(start)) {
        throw new RangeError("Đỉnh bắt đầu không tồn tại trong đồ thị.");
    }
    const adjacency = new Map(vertices.map((vertex) => [vertex, []]));
    graph.edges.forEach((edge) => {
        if (!vertices.includes(edge.from) || !vertices.includes(edge.to)) {
            throw new RangeError("Cạnh tham chiếu đến đỉnh không tồn tại.");
        }
        const weight = edge.weight === undefined ? 1 : Number(edge.weight);
        if (!Number.isFinite(weight)) throw new TypeError("Trọng số cạnh phải là số hữu hạn.");
        if (weighted && weight < 0) {
            throw new RangeError("Dijkstra chỉ hỗ trợ trọng số cạnh không âm.");
        }
        adjacency.get(edge.from).push({ vertex: edge.to, weight });
        if (edge.undirected) adjacency.get(edge.to).push({ vertex: edge.from, weight });
    });
    return { vertices, edges: graph.edges, adjacency };
}

export function* bfsSteps(graph, start) {
    const { vertices, edges, adjacency } = createGraphAdjacency(graph, start, "BFS");
    const queue = [start];
    const visited = new Set([start]);
    const traversal = [];
    const distances = Object.fromEntries(vertices.map((vertex) => [vertex, null]));
    distances[start] = 0;
    yield createFrame(
        { vertices, edges, queue, visited: [...visited], traversal, distances },
        `Khởi tạo BFS tại đỉnh ${start}; đưa đỉnh này vào hàng đợi.`
    );

    while (queue.length) {
        const current = queue.shift();
        traversal.push(current);
        yield createFrame(
            { vertices, edges, queue, visited: [...visited], traversal, distances },
            `Lấy ${current} khỏi hàng đợi và thăm đỉnh này.`,
            { activeVertex: current }
        );
        for (const { vertex: neighbor } of adjacency.get(current)) {
            yield createFrame(
                { vertices, edges, queue, visited: [...visited], traversal, distances },
                `Duyệt cạnh ${current} → ${neighbor}.`,
                { activeVertex: current, activeEdge: [current, neighbor] }
            );
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
                yield createFrame(
                    { vertices, edges, queue, visited: [...visited], traversal, distances },
                    `Phát hiện ${neighbor}: khoảng cách ${distances[neighbor]}, thêm vào hàng đợi.`,
                    { activeVertex: current, activeEdge: [current, neighbor], discovered: neighbor }
                );
            }
        }
    }
    yield createFrame(
        { vertices, edges, queue, visited: [...visited], traversal, distances },
        `Hoàn tất BFS. Thứ tự duyệt: ${traversal.join(" → ")}.`,
        { complete: true }
    );
}

export function* dfsSteps(graph, start) {
    const { vertices, edges, adjacency } = createGraphAdjacency(graph, start, "DFS");
    const stack = [start];
    const discovered = new Set([start]);
    const visited = new Set();
    const traversal = [];
    const distances = Object.fromEntries(vertices.map((vertex) => [vertex, null]));
    distances[start] = 0;
    yield createFrame(
        { vertices, edges, stack, visited: [], traversal, distances },
        `Khởi tạo DFS tại đỉnh ${start}; đưa đỉnh này vào ngăn xếp.`
    );

    while (stack.length) {
        const current = stack.pop();
        visited.add(current);
        traversal.push(current);
        yield createFrame(
            { vertices, edges, stack, visited: [...visited], traversal, distances },
            `Lấy ${current} khỏi ngăn xếp và thăm đỉnh này.`,
            { activeVertex: current }
        );
        const neighbors = adjacency.get(current);
        for (let index = neighbors.length - 1; index >= 0; index--) {
            const { vertex: neighbor } = neighbors[index];
            yield createFrame(
                { vertices, edges, stack, visited: [...visited], traversal, distances },
                `Xét cạnh ${current} → ${neighbor}.`,
                { activeVertex: current, activeEdge: [current, neighbor] }
            );
            if (!discovered.has(neighbor)) {
                discovered.add(neighbor);
                distances[neighbor] = distances[current] + 1;
                stack.push(neighbor);
                yield createFrame(
                    { vertices, edges, stack, visited: [...visited], traversal, distances },
                    `Đẩy ${neighbor} vào ngăn xếp.`,
                    { activeVertex: current, activeEdge: [current, neighbor], discovered: neighbor }
                );
            }
        }
    }
    yield createFrame(
        { vertices, edges, stack, visited: [...visited], traversal, distances },
        `Hoàn tất DFS. Thứ tự duyệt: ${traversal.join(" → ")}.`,
        { complete: true }
    );
}

export function* dijkstraSteps(graph, start) {
    const { vertices, edges, adjacency } = createGraphAdjacency(
        graph,
        start,
        "Dijkstra",
        { weighted: true }
    );
    const distances = Object.fromEntries(vertices.map((vertex) => [vertex, Infinity]));
    const parents = Object.fromEntries(vertices.map((vertex) => [vertex, null]));
    const settled = new Set();
    distances[start] = 0;
    yield createFrame(
        { vertices, edges, distances, parents, settled: [], visited: [] },
        `Khởi tạo Dijkstra tại ${start}; khoảng cách ban đầu là 0, các đỉnh khác là ∞.`
    );

    while (settled.size < vertices.length) {
        let current = null;
        let minimumDistance = Infinity;
        for (const vertex of vertices) {
            if (!settled.has(vertex) && distances[vertex] < minimumDistance) {
                current = vertex;
                minimumDistance = distances[vertex];
            }
        }
        if (current === null) break;
        settled.add(current);
        yield createFrame(
            { vertices, edges, distances, parents, settled: [...settled], visited: [...settled] },
            `Chốt đỉnh ${current} với khoảng cách ngắn nhất ${minimumDistance}.`,
            { activeVertex: current }
        );
        for (const { vertex: neighbor, weight } of adjacency.get(current)) {
            if (settled.has(neighbor)) continue;
            const candidate = distances[current] + weight;
            yield createFrame(
                { vertices, edges, distances, parents, settled: [...settled], visited: [...settled] },
                `Thử cạnh ${current} → ${neighbor} (${weight}): ${distances[current]} + ${weight} = ${candidate}.`,
                { activeVertex: current, activeEdge: [current, neighbor], candidate: neighbor }
            );
            if (candidate < distances[neighbor]) {
                distances[neighbor] = candidate;
                parents[neighbor] = current;
                yield createFrame(
                    { vertices, edges, distances, parents, settled: [...settled], visited: [...settled] },
                    `Cập nhật khoảng cách đến ${neighbor} thành ${candidate} qua ${current}.`,
                    { activeVertex: current, activeEdge: [current, neighbor], updated: neighbor }
                );
            }
        }
    }
    yield createFrame(
        { vertices, edges, distances, parents, settled: [...settled], visited: [...settled] },
        `Hoàn tất Dijkstra từ ${start}.`,
        { complete: true }
    );
}
