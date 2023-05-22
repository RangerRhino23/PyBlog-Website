import socket
import threading

def receive_messages(client_socket):
    while True:
        message = client_socket.recv(1024).decode('utf-8')
        print('Received:', message)

def start_client():
    # Set up client socket
    server_host = 'localhost'  # Change to the IP address or domain name of the chatroom server
    server_port = 12345  # Change to the port number of the chatroom server
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect((server_host, server_port))
    print('Connected to the chatroom server')

    # Start receiving messages in a separate thread
    receive_thread = threading.Thread(target=receive_messages, args=(client_socket,))
    receive_thread.start()

    # Send messages to the chatroom
    while True:
        message = input('Your message: ')
        client_socket.send(message.encode('utf-8'))
        if message.lower() == 'quit':
            break

    # Clean up
    receive_thread.join()
    client_socket.close()
    print('Disconnected from the chatroom server')

start_client()
