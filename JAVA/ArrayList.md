# Some important methods of ArrayList
```java
import java.util.*;
class Main {
    public static void main(String[] args) {
      ArrayList<ArrayList<Integer>>arr= new ArrayList<>();
      ArrayList<Integer> arr1= new ArrayList<>();
      arr1.add(10);
      arr1.add(20);
      arr1.add(30);
      arr.add(4,50);
      arr.add(arr1);
      
      System.out.print(arr);
    }
}
```

1. add(element)
2. add(index, element), it adds at that place and shift other element to the right.
3. isEmpty()
4. remove(index), it remove that element at that index only.
5. toArray(), returns the array , which has all the elemnts;

# Linked List in java 

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
     LinkedList<Integer> ls= new LinkedList<>();
     ls.add(1);  // add value
     ls.add(2);
     ls.add(10);
     ls.add(20);
      ls.set(3,100);
     ls.add(3,500);          // notice these methods as well
     ls.removeFirst();
     ls.removeLast();
     
     for(int i=0;i<ls.size();i++){ // here get size
       int val=ls.get(i);   // here get value
       System.out.println(val);
     }
    }
}
```
