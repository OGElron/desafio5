class ProductosApi {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listar(id) {
        try {
            const productoId = this.productos.find(x => x.id === id);
            return productoId;
        } catch (error) {
            console.error("error:", error);
        }
    }

    listarAll() {
        try {
            const data = this.productos;
            return data;
        } catch (error) {
            console.error("error:", error);
        }
    }

    save(prod) {
        try {
            this.id++
            const obj = {...prod, id: this.id}
            this.productos.push(obj);
        } catch (error) {
            console.error("error:", error);
        }
    }

    actualizar(prod, id) {
        try {
                const productoId = this.productos.find(x => x.id === id);
                const obj = prod;
                const newObject = Object.assign(productoId, obj);
                
                return newObject;
        } catch (error) {
            console.error("error:", error);
        }
    }

    borrar(id) {
        try {
            const productoIndex = this.productos.findIndex(x => x.id === id);
            this.productos.splice(productoIndex, 1);
        } catch (error) {
            console.error("error:", error);
        }
    }
}

module.exports = ProductosApi;