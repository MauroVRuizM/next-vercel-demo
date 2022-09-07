

export const LightLayout = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            { children }
        </div>
    )
}
