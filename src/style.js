
<View style={[styles.hour, {
        transform: [{ rotateZ: "45deg" }]
    }]}>
</View>

const styles = StyleSheet.create({
    hour: {
        backgroundColor: 'black',
        transformOrigin: 'bottom',
        width: '0.5rem',
        height: '15rem',
        marginBottom: '15rem'
    },

    minute: {
        backgroundColor: 'black',
        transformOrigin: 'bottom',
        width: '0.25rem',
        height: '20rem',
        marginBottom: '20rem'
    },

    second: {
        backgroundColor: 'black',
        transformOrigin: 'bottom',
        width: '0.125rem',
        height: '22rem',
        marginBottom: '22rem',
    }
});