declare module 'react-native-html-to-pdf' {
    interface Options {
        html: string;
        fileName: string;
        directory?: string;
        width?: number;
        height?: number;
        // Add other options as needed
    }

    export function convert(options: Options): Promise<{ filePath: string }>;
}
