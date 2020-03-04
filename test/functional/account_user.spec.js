const {test, trait, before, beforeEach, after, afterEach} = use('Test/Suite')('Auth Controller Test')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')
//trait('DatabaseTransactions')
before(async () => {
  await User.truncate();
})

test('add new users test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.post('/api/v1/register')
    .send({
      username: 'mashcom',
      email: 'bmashcom@hotmail.com',
      password:'password'
    }).end()

  response.assertStatus(200)
  response.assertJSONSubset({username:"mashcom"})

})

test('add new other users  test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.post('/api/v1/register')
    .send({
      username: 'adonis',
      email: 'adonis@hotmail.com',
      password:'password'
    }).end()

  response.assertStatus(200)
  response.assertJSONSubset({username:"adonis"})

})


