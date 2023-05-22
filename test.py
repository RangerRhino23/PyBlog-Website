import socket
import threading

def handle_client(client_socket, client_address):
    while True:
        message = client_socket.recv(1024).decode('utf-8')
        if message == 'quit':
            break
        print(f'Received from {client_address[0]}: {message}')
        response = input('Your message: ')
        client_socket.send(response.encode('utf-8'))
    client_socket.close()

def start_chatroom():
    # Set up server socket
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_host = 'localhost'  # Change to your desired IP address or domain name
    server_port = 12345  # Change to your desired port number
    server_socket.bind((server_host, server_port))
    server_socket.listen(2)
    print(f'Chatroom started on {server_host}:{server_port}')

    # Wait for two clients to join
    while True:
        client_socket, client_address = server_socket.accept()
        print(f'Client connected: {client_address[0]}:{client_address[1]}')
        threading.Thread(target=handle_client, args=(client_socket, client_address)).start()

start_chatroom()
