export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-border/40 py-6">
            <div className="container text-center text-sm text-muted-foreground">
                <p>&copy; {currentYear} Tecveq. All rights reserved.</p>
            </div>
        </footer>
    );
}
