
import java.util.ArrayList;

public class PilhaArray {
	private ArrayList<Integer> stack;
	private int maxSize;
	
	public PilhaArray(int maxSize) {
		this.stack = new ArrayList<>();
		this.maxSize = maxSize;
	}
	public boolean isEmpty() {
		return stack.isEmpty();
	}
	public int size() {
		return stack.size();
	}
	public void push(int item) {
		if(stack.size() < maxSize) {
			stack.add(item);
		}
	}
	public Integer pop() {
		if(!isEmpty()) {
			return stack.remove(stack.size()-1);
		}
		return null;
	}

}
