
interface Props {
    label: string;
    type: string;
    placeholder: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputComponent({ label, type, placeholder, id, value, onChange }: Props) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
}