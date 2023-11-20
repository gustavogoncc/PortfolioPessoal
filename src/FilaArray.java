
import java.util.ArrayList;

public class FilaArray {
	private ArrayList<String> queue;
	private int maxSize;
	
	public FilaArray(int maxSize) {
		this.queue = new ArrayList<>();
		this.maxSize = maxSize;
	}
	public boolean isEmpty() {
		return queue.isEmpty();
	}
	public int size() {
		return queue.size();
	}
	public void enqueue(String item) {
		if(queue.size() < maxSize) {
			queue.add(item);
		}
	}
	public String dequeue() {
		if(!isEmpty()) {
			return queue.remove(0);
		}
		return null;
	}

}
