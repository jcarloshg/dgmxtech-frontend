
export interface Props {
    label: string;
    onClick: () => void,
    className?: string,
}

export const PrimaryButton = ({ label, onClick, className, }: Props) => {
    return (
        <button
            onClick={onClick}
            className={`
                w-min rounded-md bg-blue-950 py-1 px-2 text-white
                ${className}`}
        >
            {label}
        </button>
    )
}