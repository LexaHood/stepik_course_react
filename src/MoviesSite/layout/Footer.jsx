export default function Footer() {
  return (
    <>
      <footer className="page-footer indigo full-width">
        <div className="footer-copyright">
          <div className="row">
            <span className="text-lighten-4">© {new Date().getFullYear()} Copyright</span>
          </div>
        </div>
      </footer>
    </>
  );
}