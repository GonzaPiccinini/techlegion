import { Router } from 'express';
import fs from 'node:fs'

const PATH_ROUTER = __dirname
const router = Router()

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}

fs.readdirSync(PATH_ROUTER).forEach(fileName => {
    const cleanName = cleanFileName(fileName)
    if (cleanName != 'index') {
        import(`./${fileName}`).then(moduleRouter => {
            router.use(`/api/${cleanName}`, moduleRouter.router)
        })
    }
})


export { router }