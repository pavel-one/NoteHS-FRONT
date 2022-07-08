import Api from "@/plugins/root/rootApi";

const Module = {}

Module.install = function (vue, options) {
    vue.prototype.$api = Api
}

export default Module