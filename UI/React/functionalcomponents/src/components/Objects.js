import React, { useState } from "react";

function Object() {
    const [student, setStudent] = useState({ name: "Junaid", age: 18 });
    return (
        <div>
            <h1>
                {student.name},{student.age}
            </h1>
            <button onClick={() => setStudent({ ...student, name: "Hisham" })}>
                Update Name
            </button>
            <button
                onClick={() =>
                    setStudent((prevState) => ({
                        ...student,
                        age: prevState.age + 1,
                    }))
                }
            >
                Increase Age
            </button>
            <button
                onClick={() =>
                    setStudent(() => ({ ...student, age: student.age + 1 }))
                }
            >
                Increases Age
            </button>
            <h1>{JSON.stringify(student)}</h1>
            <hr />
        </div>
    );
}

export default Object;
