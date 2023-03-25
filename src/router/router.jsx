import { createBrowserRouter } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { ErrorPage, MarvelPage, DcPage, Search, Hero } from '../heroes/pages/index'
import { HeroesApp } from '../HeroesApp'

export const router = createBrowserRouter([
  {
    path: '',
    element: <HeroesApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <MarvelPage />,
        errorElement: <ErrorPage />
      },
      {
        path: 'marvel',
        element: <MarvelPage />,
        errorElement: <ErrorPage />
      },
      {
        path: 'dc',
        element: <DcPage />,
        errorElement: <ErrorPage />
      },
      {
        path: 'search',
        element: <Search />,
        errorElement: <ErrorPage />
      },
      {
        path: 'hero/:id',
        element: <Hero />,
        errorElement: <ErrorPage />
      },
      {
        path: 'login',
        element: <LoginPage />,
        errorElement: <ErrorPage />
      }
    ]
  }

])
