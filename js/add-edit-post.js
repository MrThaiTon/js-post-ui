import postApi from './api/postApi'
import { initPostForm, toast } from './ultis'

async function handlePostFormSubmit(formValues) {
  /* console.log('submit form parent', formValues) */
  try {
    //throw new Error('error from testing')
    //check add/edit mode
    //S1: based on search params (check id)
    //S2: check id in formValues
    //call API

    /* let savedPost = null
    if (formValues.id) {
      savedPost = await postApi.update(formValues)
    } else {
      savedPost = await postApi.add(formValues)
    } */

    const savedPost = formValues.id
      ? await postApi.update(formValues)
      : await postApi.add(formValues)

    //show success message
    toast.success('Save post successfully!')

    //redirect to detail page
    //window.location.assign(`/post-detail.html?id=${savedPost.id}`)
  } catch (error) {
    console.log('failed to save post', error)
    toast.error(`Error: ${error.message}`)
  }
}
//MAIN
;(async () => {
  try {
    const searchParams = new URLSearchParams(window.location.search)
    const postId = searchParams.get('id')

    const defaultValues = Boolean(postId)
      ? await postApi.getById(postId)
      : {
          title: '',
          description: '',
          author: '',
          imageUrl: '',
        }

    initPostForm({
      formId: 'postForm',
      defaultValues,
      onSubmit: handlePostFormSubmit,
    })
  } catch (error) {
    console.log('failed to fetch post details:', error)
  }
})()
