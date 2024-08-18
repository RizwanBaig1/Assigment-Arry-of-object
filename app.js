const student = [{
    name : "John Doe",
    semester:3,
    father_name:"Doe",
    isFeePaid: true,
    courses:["Mathematics","Physics","Computer Scince"]
    },{
        name : "Jane Smith",
        father_name:"Smith",
        semester: 2,
        isFeePaid: true,
        courses:["Biology","Chemistry","English"]
    },{
        name : "Emily Johnson",
        father_name:"JOhnson",
        semester:4,
        isFeePaid: false,
        courses :["Economics","Statistics","Marketing"]
    }
];
function displayObjectsInHeadings(){
    const container = 
    document.getElementById('main');
    student.forEach(obj =>{
        const h2Element = 
        document.createElement('h2');
          h2Element.textContent = 
          `Name: ${obj.name}, Semester: ${obj.semester}, Father_name: ${obj.father_name}, IsFeesPaid: ${obj.isFeePaid}`;
    container.appendChild(h2Element);
     const list =
     document.createElement('ul');
     obj.courses.forEach(subject => {
        const listItem =
        document.createElement('li');
        listItem.textContent = subject;
        list.appendChild(listItem);
     });
     container.appendChild(list);
            
    });
}

displayObjectsInHeadings()