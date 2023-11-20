
import java.util.LinkedList;

public class FilaListaEncadeada {
	private LinkedList<Integer>queue;
	
	public FilaListaEncadeada() {
		this.queue = new LinkedList<>();
	}
	public boolean isEmpty() {
		return queue.isEmpty();
	}
	public int size() {
		return queue.size();
	}
	public void enqueue(int item) {
		queue.addLast(item);
	}
	public Integer dequeue() {
		if(!isEmpty()) {
			return queue.removeFirst();
		}
		return null;
	}

}