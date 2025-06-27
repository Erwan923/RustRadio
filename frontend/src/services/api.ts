const API_BASE_URL = '/api'; // Nginx will proxy this to the backend

export interface Container {
    id: string;
    config: {
        name: string;
        image: string;
        // Add other config fields as needed
    };
    // Add other container fields as needed
}

export const listContainers = async (): Promise<Container[]> => {
    const response = await fetch(`${API_BASE_URL}/containers`);
    if (!response.ok) {
        throw new Error('Failed to fetch containers');
    }
    return response.json();
};

export const createContainer = async (config: any): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/containers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
    });
    if (!response.ok) {
        throw new Error('Failed to create container');
    }
    return response.text();
};

export const executeContainer = async (id: string): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/containers/${id}/execute`, {
        method: 'POST',
    });
    if (!response.ok) {
        throw new Error('Failed to execute container');
    }
    return response.text();
};