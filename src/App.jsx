import React, { lazy, Suspense } from 'react';

const ComponentApp = lazy(() => import('./Components/App'));
const MoviesSiteApp = lazy(() => import('./MoviesSite/App'));
const FuncComponentsApp = lazy(() => import('./FuncComponents/App'));

const App = ({ START_PROJECT }) => {
  const renderComponent = () => {
    switch (START_PROJECT) {
      case 'components':
        return <ComponentApp />;
      case 'movies-site':
        return <MoviesSiteApp />;
      case 'func-componenets':
        return <FuncComponentsApp/>;
      default:
        return <h1>Project Not Found 404</h1>;
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {renderComponent()}
    </Suspense>
  );
};

export default App;