
import java.util.LinkedList;

public class PilhaListaEncadeada {
	private LinkedList<String> stack;
	
	public PilhaListaEncadeada() {
		this.stack = new LinkedList<>();
	}
	public boolean isEmpty() {
		return stack.isEmpty();
	}
	public int size() {
		return stack.size();
	}
	public void push(String item) {
		stack.addFirst(item);
	}
	public String pop() {
		if(!isEmpty()) {
			return stack.removeFirst();
		}
		return null;
	}

}