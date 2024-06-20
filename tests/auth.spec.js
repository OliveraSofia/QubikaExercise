  
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
