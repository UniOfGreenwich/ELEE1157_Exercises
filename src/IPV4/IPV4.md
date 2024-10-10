# IPv4



## Exercise 1: Identify the IPv4 Class

~~~admonish question collapsible=true title='**Question**: What class does the IP address `126.25.34.2` belong to?'
    
- **Class**: Class A

~~~

~~~admonish question collapsible=true title='**Question**: What class does the IP address `191.50.23.14` belong to?'

    
- **Class**: Class B
    
~~~


~~~admonish question collapsible=true title='**Question**: What class does `224.0.0.5` belong to, and what is its purpose?'

- **Class**: Class D
- **Purpose**: Class D addresses are used for multicast.

~~~

---

## Exercise 2: Calculate the Number of Hosts and Networks

~~~admonish question collapsible=true title='**Question**: For a Class A network, how many hosts and networks are possible?'
        
- **Networks**: \\(126 (1.0.0.0 - 126.0.0.0)\\)
- **Hosts per network**: \\(2^{24} - 2 = 16,777,214\\) usable hosts

~~~

~~~admonish question collapsible=true title='**Question**: Calculate the number of hosts and networks for a Class C address.'
     
- **Networks**: \\(2^{21} = 2,097,152\\) possible Class C networks
- **Hosts per network**: \\(2^{8} - 2 = 254\\) usable hosts

~~~

---

## Exercise 3: Convert Between Binary and Dotted Decimal Notation

~~~admonish question collapsible=true title='**Question**: Convert the binary IP `11000000.10101000.00000001.00000001` to dotted decimal notation.'
           
- **Dotted Decimal**: `192.168.1.1`
        
~~~

~~~admonish question collapsible=true title='**Question**: Convert the IP address `10.0.0.1` to binary.'

- **Binary**: `00001010.00000000.00000000.00000001`
        
~~~

---

## Exercise 4: Reserved and Special Addresses

~~~admonish question collapsible=true title='**Question**: Is `127.0.0.1` a public or reserved address, and what is it used for?'

- **Type**: Reserved (Loopback address)
- **Purpose**: Used for local testing of the TCP/IP stack.

~~~

~~~admonish question collapsible=true title='**Question**: Identify the purpose of the IP address range `169.254.0.0 - 169.254.255.255`.'


- **Type**: Automatic Private IP Addressing (APIPA)
- **Purpose**: Assigned when DHCP is unavailable, allowing local communication.

~~~

~~~admonish question collapsible=true title='**Question**: Is `0.0.0.0` a valid IPv4 address, and if so, what is it used for?'

- **Validity**: Yes, it’s valid.
- **Purpose**: Represents an unspecified address or a default route.

~~~