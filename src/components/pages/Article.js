import React from 'react';
import './Article.css';
import ImageGallery from  'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaCodeBranch } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Article(
    {
        articleID,
        header,
        decsription,
        images,
        isSourceAvaliable,
        codeBranchUrl,
        reverse,
    }
)


{
    return (
        <>
        <section id= {'Article'+articleID} >
            <div className='article-container'>
                <div className='article-header'>{header}</div>
                <div className='row' style={ { display: 'flex', flexDirection: reverse ? 'row-reverse' : 'row' }} >
                    <div className='col'>
                        <div className='article-content'>
                            {decsription}
                        </div>
                    </div>
                    <div className='col'>
                        <div className='article-image-gallery-wrapper'>
                            <ImageGallery items={images} showPlayButton='false' showBullets='true'/>
                        </div>
                    </div>
                </div>
                <div className='article-footer'>
                        Source Code:
                        {isSourceAvaliable ? 
                            <Link
                                to={codeBranchUrl}
                                target='_blank'
                            >
                                <FaCodeBranch className='article-footer-icon' />
                            </Link>
                        
                        : 
                        <div className='article-private-source-code'>
                            &lt;Kod prywatny&gt;
                        </div>
                        }

                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Article
