// 3. importacion del modelo
import BlogModels from '../models/BlogModel.js'

//==> Metodos para el CRUD <==

// Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModels.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}
// mostrar un registro
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModels.findAll({
            where: { id: req.params.id }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createBlog = async (req, res) => {
    try {
        await BlogModels.create(req.body)
        res.json({ "message": "Resgistro creado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Actualizar un resgitro
export const updateBlog = async (req, res) => {
    try {
        await BlogModels.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": "Resgistro Actualizado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Eliminar un resgistro 

export const deleteBlog = async (req, res) => {
    try {
        await BlogModels.destroy({
            where: { id: req.params.id }
        })
        res.json({ "message": "Resgistro Borrado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}



