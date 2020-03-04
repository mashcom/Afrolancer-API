const {test, trait, before, beforeEach, after, afterEach} = use('Test/Suite')('Gig Controller Test')
const User = use('App/Models/User')
const Gig = use('App/Models/Gig')
const GigPackage = use('App/Models/GigPackage')
const GigCategory = use('App/Models/GigCategory')
const GigRequirement = use('App/Models/GigRequirement')

trait('Test/ApiClient')
trait('Auth/Client')
//trait('DatabaseTransactions')
before(async () => {
  await Gig.truncate();
  await GigPackage.truncate();
  await GigCategory.truncate();
  await GigRequirement.truncate();
})

test('get list of gigs test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.get('/api/v1/gig').loginVia(user, 'api').end()
  response.assertStatus(200)
  response.assertJSONSubset({})
})

test('add new gig test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.post('/api/v1/gig')
    .send({
      title: 'Adonis 101',
      description: 'Post content Post content Post content'
    }).loginVia(user, 'api').end()

  response.assertStatus(200)
  response.assertJSONSubset({success: true})

})

test('check if added gig exists test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.get('/api/v1/gig/1').loginVia(user, 'api').end()

  response.assertStatus(200)
  response.assertTextHas('Adonis 101')

})


test('update gig test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.patch('/api/v1/gig/1').send({
    title: 'Adonis 101 Updated',
    description: 'Post content Post content Post content'
  }).loginVia(user, 'api').end()

  response.assertStatus(200)
  response.assertJSONSubset({success: true})

})

test('check if updated gig exists in db test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.get('/api/v1/gig/1').loginVia(user, 'api').end()

  response.assertStatus(200)
  response.assertTextHas('Adonis 101 Updated')
  response.assertTextHas('Post content Post content Post content')

})


test('add gig package test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.post('/api/v1/gig_package').send({
    gig_id: 1,
    name: 'Test Bronze',
    description: 'Bronze Description',
    price: 20,
    duration: 20000,
  }).loginVia(user, 'api').end()

  response.assertStatus(200)
  response.assertTextHas("true")

  const response2 = await client.post('/api/v1/gig_package').send({
    gig_id: 1,
    name: 'Test Silver',
    description: 'Silver Description',
    price: 50,
    duration: 10000,
  }).loginVia(user, 'api').end()

  response2.assertStatus(200)
  response2.assertTextHas("true")

})

test('add new gig category', async ({client}) => {
  const user = await User.find(1)
  const response = await client.post('/api/v1/gig_category')
    .send({
      gig_id: 1,
      category_id: 1
    }).loginVia(user, 'api').end()

  response.assertStatus(200)
  response.assertJSONSubset({success: true})
})

test('add new gig requirement test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.post('/api/v1/gig_requirement')
    .send({
      gig_id: 1,
      requirement: "new requirement"
    }).loginVia(user, 'api').end()

  response.assertStatus(200)
  response.assertJSONSubset({success: true})
})

test('add new gig requirement with unauthorised user', async ({client}) => {
  const user = await User.find(2)
  const response = await client.post('/api/v1/gig_requirement')
    .send({
      gig_id: 1,
      requirement: "new requirement"
    }).loginVia(user, 'api').end()

  response.assertStatus(404)
})

test('update gig requirement test', async ({client}) => {
  const user = await User.find(1)
  const response = await client.patch('/api/v1/gig_requirement/1')
    .send({
      gig_id: 1,
      requirement: "updated new requirement"
    }).loginVia(user, 'api').end()

  response.assertStatus(200)
  response.assertJSONSubset({success: true})
})

test('update gig requirement with unauthorised user test', async ({client}) => {
  const user = await User.find(2)
  const response = await client.patch('/api/v1/gig_requirement/1')
    .send({
      gig_id: 1,
      requirement: "updated new requirement"
    }).loginVia(user, 'api').end()

  response.assertStatus(404)
})

