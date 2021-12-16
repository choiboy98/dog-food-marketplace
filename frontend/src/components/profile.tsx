import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { getUser } from '../utils/auth';
import { GatsbyImage } from "gatsby-plugin-image"

import "../styles/profile.scss"

const Profile = () => {
    const data = useStaticQuery(graphql`
    query {
        profile: file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
                gatsbyImageData(layout: FIXED, width: 400, height: 400)
            }
        }
    }
    `)

    return (
        <div className="container">
            <div className="profile-page">
                <div className="profile">
                    <GatsbyImage image={data.profile.childImageSharp.gatsbyImageData} alt="profile image" />
                    <div className="desc">
                        <h1>{getUser().name}</h1>
                        <h2>{getUser().description}</h2>
                    </div>
                </div>
                <div className="profile-recipe">
                <div className="grid-container">
                    <div className="card">
                        <h1>sdf</h1>
                    </div>
                    <div className="card">
                        <h1>sdf</h1>
                    </div>
                    <div className="card">
                        <h1>sdf</h1>
                    </div>
                    <div className="card">
                        <h1>sdf</h1>
                    </div>
                    <div className="card">
                        <h1>sdf</h1>
                    </div>
                    <div className="card">
                        <h1>sdf</h1>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile