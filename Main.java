import java.util.*;

public class Main {

    public static void main(String [] args) 
    {
        ArrayList<Employee> dp = new ArrayList<>();

        dp.add(new Employee(1,"Ramesh",1200,new Department(1,"sales")));

        for(Employee e:dp)
        {
            System.out.println(e);
        }

    }
    
}
