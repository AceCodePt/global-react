let obj: Record<string, string | number> = {};
obj.y = 3;

function getEmployee(): IEmployee {
  let employee: unknown;
  if (typeof employee === "object" && employee !== null) {
    if ("name" in employee && typeof employee.name === "string") {
      return { name: employee.name };
    }
  }
  return employee as any;
}

type IEmployee = {
  getID: () => string;
  name: string;
};

class SuperEmployee implements IEmployee {
  getID: () => string;
  name: string;
}
