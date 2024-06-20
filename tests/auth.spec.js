  
test('auth User', async ({ request }) => { 
    const res = await request.post('https://api.club-administration.qa.qubika.com/api/auth/login', {
        data: {
            "email": "test.qubika@qubika.com",
            "password": "12345678",
            "userName": "test.qubika"
          }
    });
    expect(res.status()).toBe(200)
    console.log(await res.json())

});

test('Create User', async ({ request }) => { 
    const res = await request.post('https://api.club-administration.qa.qubika.com//api/auth/register', {
        data: {
         "email": 'data.test@email',
         "password": 'password',
         "roles": [
         "ROLE_ADMIN"
                    ]
            }
    });
    expect(res.status()).toBe(200)
    console.log(await res.json())

});
