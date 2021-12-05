const url = "/api/profiles/"
import axios from "axios";

class PostService {

    // Get Profiles from the backend server
    static getProfiles() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
                .catch((err) => {
                    reject(err);
                })
        });
    }

//    Create profiles
    static createProfile(text) {
        (async () => fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: text,
                createdAt: new Date()
            })
        }))().then();
        // response().then(res => res.json()).then((json) => console.log(json));
    }

    static deletePost(id) {
        return fetch(`${url}${id}`, {
            method: "delete"
        })
    }

}

export default PostService;