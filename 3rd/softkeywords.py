import keyword as k
print("Hard Keywords\n")
print(k.kwlist)
print("----------------------------------------------------------------")
print("Soft Keywords\n")
print(k.softkwlist)
print("----------------------------------------------------------------")

def f1():
    return  5

action=f1()
match action:
    case "hello":
        print("HELLO!!!!!!!!")
    case 3+4j:
        print("Compelx Number")
    case [1,2,3]:
        print("List")
    case _:
        print("Default")
print("----------------------------------------------------------------")
type cordinates=tuple[float,float]
type list_of_points=list[cordinates]
p1:cordinates=(4.0,5.300)
p2:cordinates=(10.0,8.60)
p3:cordinates=(8.0,9.30)
mylist:list_of_points=[ p1,p2,p3 ]
print(mylist)