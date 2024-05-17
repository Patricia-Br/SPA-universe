import {Router} from './router.js'

const router = new Router()
router.add("/", "/pages/home.html", "home")
router.add("/universo", "/pages/universo.html", "universo")
router.add("/exploracao", "/pages/exploracao.html", "exploracao")
router.add("/error", "/pages/error.html", "error")

router.handle()

window.onpopstate = () => router.handle()
window.Route = () => router.Route()