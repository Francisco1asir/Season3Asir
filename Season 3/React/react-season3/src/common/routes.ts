import { CategoriasPage, ContactoPage, HomePage, FormacionPage, ProyectosPage, ServiciosPage, SesionPage, Productos } from "../pages/index";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: JSXComponent;
    name: string;
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/home',
        component: HomePage,
        name: 'Home'
    },
    {
        path: 'contacto',
        component: ContactoPage,
        name: 'Contacto'
    },
    {
        path: 'formacion',
        component: FormacionPage,
        name: 'Formacion'
    },
    {
        path: 'proyectos',
        component: ProyectosPage,
        name: 'Proyectos'
    },
    {
        path: 'servicios',
        component: ServiciosPage,
        name: 'Servicios'
    },
    {
        path: 'sesion',
        component: SesionPage,
        name: 'Sesion'
    },
    {
        path: 'productos',
        component: Productos,
        name: 'Productos'
    },
    {
        path: 'categorias',
        component: CategoriasPage,
        name: 'Categorias'
    }
];