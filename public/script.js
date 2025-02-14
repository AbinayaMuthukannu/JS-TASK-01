function submitData() {
    let Data = {
        name: document.getElementById("Field1")?.value || "",
        email: document.getElementById("Field2")?.value || "",
        phone: document.getElementById("Field3")?.value || "",
        ug: {
            department: document.getElementById("Field4")?.value || "",
            year: document.getElementById("Field5")?.value || "",
        
        firstyear: {
            maths1: document.getElementById("Field8")?.value || "",
            digital1: document.getElementById("Field9")?.value || "",
            dbms1: document.getElementById("Field10")?.value || "",
            maths2: document.getElementById("Field11")?.value || "",
            digital2: document.getElementById("Field12")?.value || "",
            dbms2: document.getElementById("Field13")?.value || ""
        },
        secondyear: {
            maths1: document.getElementById("Field14")?.value || "",
            digital1: document.getElementById("Field15")?.value || "",
            dbms1: document.getElementById("Field16")?.value || "",
            maths2: document.getElementById("Field17")?.value || "",
            digital2: document.getElementById("Field18")?.value || "",
            dbms2: document.getElementById("Field19")?.value || ""
        },
        thirdyear: {
            maths1: document.getElementById("Field20")?.value || "",
            digital1: document.getElementById("Field21")?.value || "",
            dbms1: document.getElementById("Field22")?.value || "",
            maths2: document.getElementById("Field23")?.value || "",
            digital2: document.getElementById("Field24")?.value || "",
            dbms2: document.getElementById("Field25")?.value || ""
        }
    },
    pg: {
        department: document.getElementById("Field6")?.value || "",
        year: document.getElementById("Field7")?.value || "",
        firstyear: {
            maths1: document.getElementById("Field8")?.value || "",
            digital1: document.getElementById("Field9")?.value || "",
            dbms1: document.getElementById("Field10")?.value || "",
            maths2: document.getElementById("Field11")?.value || "",
            digital2: document.getElementById("Field12")?.value || "",
            dbms2: document.getElementById("Field13")?.value || ""
        },
        secondyear: {
            maths1: document.getElementById("Field14")?.value || "",
            digital1: document.getElementById("Field15")?.value || "",
            dbms1: document.getElementById("Field16")?.value || "",
            maths2: document.getElementById("Field17")?.value || "",
            digital2: document.getElementById("Field18")?.value || "",
            dbms2: document.getElementById("Field19")?.value || ""
        },
        thirdyear: {
            maths1: document.getElementById("Field20")?.value || "",
            digital1: document.getElementById("Field21")?.value || "",
            dbms1: document.getElementById("Field22")?.value || "",
            maths2: document.getElementById("Field23")?.value || "",
            digital2: document.getElementById("Field24")?.value || "",
            dbms2: document.getElementById("Field25")?.value || ""
        }
    }
};

    console.log("Form Data:",Data);
    alert("Form Submitted Successfully!");
}