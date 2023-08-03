public class Employee {
    
    private int empid;
    private String ename;
    private double salary;
    Department dep;

    public Employee(double d, int i, Department department){};

    public Employee(int empid, String ename, double salary,Department dep)
    {
        this.empid=empid;
        this.ename=ename;
        this.salary=salary;
        this.dep=dep;
    }

    public int getEmpid()
    {
        return empid;
    }

    public void setEmpid(int empid)
    {
        this.empid=empid;
    }

    public String getEname()
    {
        return ename;
    }

    public void setEname(String ename)
    {
        this.ename=ename;
    }

    public double getSalary()
    {
        return salary;
    }

    public void setSalary(double salary)
    {
        this.salary=salary;
    }
    public void getDepartment(Department dep)
    {
        this.dep=dep;
    }
    public Department getDepartment()
    {
        return dep;
    }

    public String toString()
    {
        return empid+" "+ename+" "+salary+" "+dep.getDeptno()+" "+dep.getDeptName();
    }
}
