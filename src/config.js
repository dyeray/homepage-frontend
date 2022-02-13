import _config from "./config.json";

export default {
    get backend_url() {
        return _config.backend_url
    }
}
