import { Await } from "react-router-dom";
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }


    async createPost({ tittle, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectioId, slug, {
                tittle,
                content,
                featuredImage,
                status,
                userId
            })
        } catch (error) {
            console.log("Appwrite Service :: createpost :: ", error);

        }
    }

    async updatePost(slug, { tittle, content, featuredImage, status }) {

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectioId,
                slug,
                {
                    tittle,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: Updatepost :: ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectioId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: Deletepost :: ", error);
            return false;
        }

    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectioId,
                slug
            )

        } catch (error) {
            console.log("Appwrite Service :: Getpost :: ", error);
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            console.log("Calling listDocuments...");

            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectioId,
                queries
            );

            console.log("Appwrite response:", response);

            return response;

        } catch (error) {
            console.log("GET POSTS ERROR");
            console.log(error);
            console.log(error.code);
            console.log(error.message);

            return false;
        }
    }

    // file upload Services 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique,
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: uploadFile :: ", error);
            return true;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: Deletepost :: ", error);
            return false;
        }
    }

    getFileId(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service = new Service();
export default service