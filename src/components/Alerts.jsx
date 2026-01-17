export default function Alerts({isAlertOpen, setIsAlertOpen}){
    return (
    <div className="toast toast-center">
        <div className="alert alert-info">
        <span>New mail arrived.</span>
        </div>
    <div className="alert alert-success">
        <span>Message sent successfully.</span>
    </div>
    </div>
    );
}