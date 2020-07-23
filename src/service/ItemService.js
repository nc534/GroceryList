import axios from "axios";

const baseURL = "http://localhost:8080";

class ItemService {
    getAll() {
        return axios.get(`${baseURL}/items`);
    }

    getByCategory(category) {
        return axios.get(`${baseURL}/items/category=${category}`);
    }

    getById(id) {
        return axios.get(`${baseURL}/items/${id}`);
    }

    create(data) {
        return axios.post(`${baseURL}/items`, data);
    }

    update(id, data) {
        return axios.put(`${baseURL}/items/${id}`, data);
    }

    delete(id) {
        return axios.delete(`${baseURL}/items/${id}`);
    }

    deleteAll() {
        return axios.delete(`${baseURL}/items`);
    }
    
    findByItem(name) {
        return axios.get(`/items?itemName=${name}`);
    }

}

export default new ItemService();