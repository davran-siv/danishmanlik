import * as React from 'react'

interface Props {
  fullName: string
  message: string
  image?: string,
}

const TestimonialItem = (props: Props) => (
  <div className="item">
    <blockquote>
      <div className="test_grid">
        {imageBlock(props.image)}
        <div className="col-sm-9 test_img_info">
          <p>{props.message}</p>
          <h6>{props.fullName}</h6>
        </div>
      </div>
    </blockquote>
  </div>
)

const imageBlock = (src: string | undefined) => {
  if (!src) return null
  return <div className="col-sm-3 text-center test_img"><img src={src} className="img-responsive" alt=""/></div>
}

export default TestimonialItem
