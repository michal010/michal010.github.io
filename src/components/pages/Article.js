import React from 'react';
import './Article.css';
import ImageGallery from  'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaCodeBranch, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Article(
    {
        articleID,
        header,
        decsription,
        images,
        codeBranchUrl,
        reverse,
        youtubeURL
    }
)


{
    return (
        <>
        <section id= {'Article'+articleID} >
            <div className='article-container'>
                <div className='article-header'>{header}</div>
                <div className='row' style={ { flexDirection: reverse ? 'row-reverse' : 'row' }} >
                    <div className='col'>
                        <div className='article-content'>
                            {decsription}
                        </div>
                        <div className='article-footer'>
                        {codeBranchUrl ? 
                        <div className='article-footer-item'>
                            Source Code:
                            <Link
                                to={codeBranchUrl}
                                target='_blank'
                            >
                                <FaCodeBranch className='article-footer-icon' />
                            </Link>
                        </div>

                        : 
                        <div/>
                        }
                        {youtubeURL ?
                        <div className='article-footer-item'>
                            Demo video:
                                <Link className='article-footer-icon'
                                    to={youtubeURL}
                                    target='_blank'
                                >
                                    <FaYoutube></FaYoutube>

                                </Link>
                        </div> 
                        :
                            <div className='article-footer-item'/>
                        }           
                </div>
                    </div>
                    <div className='col'>
                        <div className='article-image-gallery-wrapper'>
                            <ImageGallery items={images} showPlayButton='false' showBullets='true'/>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default Article
