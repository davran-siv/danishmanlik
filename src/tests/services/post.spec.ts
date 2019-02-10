import 'mocha'
import DefaultPostService from '../../services/post/default'
import DefaultFetcher from '../../fetchers/impl/default'
import {instance, mock, when} from 'ts-mockito'
import paths from '../../dicts/paths'
import DefaultPostRecordStorage from '../../storages/post/default'

const genResponse = (value: any) => Promise.resolve({json: () => Promise.resolve(value)}) as any

describe('PostStore', () => {
  
  it('::loadPost', async () => {
    
    const MockedPostStore = mock(DefaultPostRecordStorage)
    const MockedFetcher = mock(DefaultFetcher)
    const postStore = instance(MockedPostStore)
    const fetcher = instance(MockedFetcher)
    
    when(MockedFetcher.get(paths.Post.byId(1)))
      .thenReturn(genResponse('check'))
    
    const postService = new DefaultPostService(postStore)
    postService.setFetcher(fetcher)
    
    await postService.loadPost(1)
    
    // check if we fetch data from server
    // verify(MockedFetcher.get(paths.Post.byId(1)))
    //   .once()
    
    // check if we load data into store
    // verify(MockedPostStore.set('postById', 'check'))
    //   .once()
  })
  
})
