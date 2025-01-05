// 문제 접근 
// 1. 연결된 것들의 방문 여부만 판단하면 되므로 bfs 방식으로 접근해보았다.
// 2. 주어진 컴퓨터마다 확인하지 않은 컴퓨터일 때
// 그 컴퓨터와 이어져있고 확인되지 않은 컴퓨터의 인덱스를 enqueue, dequeue 해가면서 해당 컴퓨터의 네트워크를 확인한다.
// 3. 2번을 컴퓨터의 개수만큼 반복하고 하나의 컴퓨터의 네트워크가 끝났을 때 answer++한다.
// 시간복잡도: O(n^2)

class Queue {
	constructor() {
		this.items = [];
	}
	
	enqueue(item) {
		this.items.push(item);
	}
	
	dequeue() {
		if (this.isEmpty()) return;
		
		return this.items.shift();
	}
	
	isEmpty() {
		return this.items.length === 0;
	}
	
	size() {
		return this.items.length;
	}
}

const bfs = (computers, start, visited) => {
  const queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;

  while (queue.size()) {
    const v = queue.dequeue();
    const target = computers[v];
    
    for (j=0; j<target.length; j++) {
      const check = target[j];
      if (check === 1 && !visited[j]) {
        queue.enqueue(j);
        visited[j] = true;
      }
    }
  }
}

const solution = (n, computers) => {
  let answer = 0;
  const visited = new Array(n).fill(false);
  
  for (i=0; i<n; i++) {
    if (!visited[i]) {
      bfs(computers, i, visited);
      answer++;
    }
  }

  return answer;
}