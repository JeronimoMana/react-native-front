const { getDefaultConfig } = require('metro-config');

module.exports = async () => {
    const { resolver: { sourceExts } } = await getDefaultConfig();

    return {
        transformer: {
            babelTransformerPath: require.resolve('react-native-svg-transformer'), // Transformador para SVG
            extraTransformers: [
                {
                    transform: require.resolve('react-native-sass-transformer'), // Transformador para Sass
                }
            ]
        },
        resolver: {
            sourceExts: [...sourceExts, 'svg', 'scss', 'sass'], // Agrega las extensiones para archivos SVG, SCSS y Sass
        },
    };
};