public class Department{

    private int deptno;
    private String deptName;
    
    public Department(){};

    public Department(int deptno,String deptName)
    {
        this.deptno=deptno;
        this.deptName=deptName;
    }

    public int getDeptno()
    {
        return deptno;
    }

    public void setDeptno(int deptno)
    {
        this.deptno=deptno;
    }

    public String getDeptName()
    {
        return deptName;
    }

    public void setDeptName(String deptName)
    {
        this.deptName=deptName;
    }

    public String toString()
    {
        return deptno+" "+deptName;
    }
}