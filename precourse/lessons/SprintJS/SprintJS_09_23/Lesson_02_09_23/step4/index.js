const users = [
    {
        id: 1,
        name: 'John',
        surName: 'Doe',
        address: '123 Main St'
    },
    {
        id: 2,
        name: 'Jane',
        surName: 'Smith',
        address: '456 Elm St'
    },
    {
        id: 3,
        name: 'Tom',
        surName: 'Johnson',
        address: '789 Oak St'
    }
];

    for (let i = 0; i < users.length; i++) {
        let userAddress = users[i]
        if (userAddress.id <= 2) {
            console.log(userAddress.address)
        }
    }

const objectElements = users.filter(objectElement => objectElement.id <= 2)
objectElements.map(addressElement => console.log(addressElement.address))
users.map(addressElement => console.log(addressElement.address))