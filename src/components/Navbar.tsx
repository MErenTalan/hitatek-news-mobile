// src/components/MobileNavbar.js
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {NavbarLinkType} from '../helpers/types';

const navbarLinks: NavbarLinkType[] = [
  {
    title: 'NEWS',
    href: '/',
  },
  {
    title: 'FEATURES',
    href: '/features',
  },
  {
    title: 'TOPICS',
    href: '/topics',
  },
  {
    title: 'VIDEO',
    href: '/videos',
  },
  {
    title: 'LIVE',
    href: '/live',
    icon: (
      <View
        style={{
          backgroundColor: '#FB2040',
          height: 6,
          width: 6,
          borderRadius: 3,
          alignSelf: 'center',
          marginRight: 1,
        }}
      />
    ),
    iconPosition: 'left',
  },
];

const MobileNavbar = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuShown(!isMobileMenuShown);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.linksContainer}>
          <TouchableOpacity
            onPress={toggleMobileMenu}
            style={styles.hamburgerIcon}>
            <Image
              source={require('../images/hamburger.png')}
              style={styles.iconImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      {isMobileMenuShown && (
        <View style={styles.mobileMenuContainer}>
          {navbarLinks.map(link => (
            <TouchableOpacity key={link.title} style={styles.mobileMenuItem}>
              {link.icon}
              <Text style={styles.mobileMenuItemText}>{link.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#007BFF',
    height: 56,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  linksContainer: {
    flexDirection: 'row',
  },
  hamburgerIcon: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  mobileMenuContainer: {
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    zIndex: 999,
  },
  mobileMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  mobileMenuItemText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 6,
  },
});

export default MobileNavbar;
